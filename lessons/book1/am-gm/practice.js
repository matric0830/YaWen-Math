(() => {
  const panel = document.getElementById('quizPanel');
  const selectors = [...panel.querySelectorAll('.practice-picker button')];
  const questions = [...panel.querySelectorAll('.practice-question')];

  selectors.forEach(selector => {
    selector.addEventListener('click', () => {
      const targetId = selector.getAttribute('aria-controls');
      selectors.forEach(button => button.setAttribute('aria-pressed', String(button === selector)));
      questions.forEach(question => { question.hidden = question.id !== targetId; });
      typesetMath();
    });
  });

  questions.forEach(question => {
    const choices = [...question.querySelectorAll('.choice')];
    const retry = question.querySelector('.practice-retry');
    const solution = question.querySelector('.practice-solution');

    choices.forEach(choice => {
      choice.addEventListener('click', () => {
        const correct = choice.hasAttribute('data-correct');
        choices.forEach(button => {
          button.classList.remove('wrong');
          button.disabled = correct;
        });
        choice.classList.add(correct ? 'correct' : 'wrong');
        retry.hidden = correct;
        solution.hidden = !correct;
        if (correct) typesetMath();
      });
    });

    const canvas = question.querySelector('.practice-pad');
    const context = canvas.getContext('2d');
    const eraser = question.querySelector('.practice-eraser');
    const strokes = [];
    let activeStroke = null;
    let pointerId = null;
    let width = 0;
    let height = 0;

    eraser.addEventListener('click', () => {
      const isErasing = eraser.getAttribute('aria-pressed') === 'true';
      eraser.setAttribute('aria-pressed', String(!isErasing));
    });

    function drawSegment(from, to, erase) {
      context.globalCompositeOperation = erase ? 'destination-out' : 'source-over';
      context.lineWidth = erase ? 16 : 2.5;
      context.beginPath();
      context.moveTo(from.x * width, from.y * height);
      context.lineTo(to.x * width + (from === to ? 0.01 : 0), to.y * height);
      context.stroke();
    }

    function resize() {
      const nextWidth = canvas.clientWidth;
      const nextHeight = canvas.clientHeight;
      if (!nextWidth || !nextHeight) return;
      const scale = window.devicePixelRatio || 1;
      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
      context.strokeStyle = '#fff5dd';
      context.lineCap = 'round';
      strokes.forEach(({ points, erase }) => {
        points.forEach((point, index) => drawSegment(points[index - 1] ?? point, point, erase));
      });
    }

    new ResizeObserver(resize).observe(canvas);

    function pointAt(event) {
      const bounds = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - bounds.left - canvas.clientLeft) / width,
        y: (event.clientY - bounds.top - canvas.clientTop) / height
      };
    }

    canvas.addEventListener('pointerdown', event => {
      if (event.button !== 0 || pointerId !== null) return;
      if (!width || !height) resize();
      if (!width || !height) return;
      const point = pointAt(event);
      canvas.setPointerCapture(event.pointerId);
      pointerId = event.pointerId;
      activeStroke = { points: [point], erase: eraser.getAttribute('aria-pressed') === 'true' };
      strokes.push(activeStroke);
      drawSegment(point, point, activeStroke.erase);
    });

    canvas.addEventListener('pointermove', event => {
      if (event.pointerId !== pointerId) return;
      const point = pointAt(event);
      const { points, erase } = activeStroke;
      drawSegment(points[points.length - 1], point, erase);
      points.push(point);
    });

    function endStroke(event) {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      activeStroke = null;
    }

    canvas.addEventListener('pointerup', endStroke);
    canvas.addEventListener('pointercancel', endStroke);
    canvas.addEventListener('lostpointercapture', endStroke);
    question.querySelector('.practice-clear').addEventListener('click', () => {
      pointerId = null;
      activeStroke = null;
      strokes.length = 0;
      context.clearRect(0, 0, width, height);
    });
  });
})();
