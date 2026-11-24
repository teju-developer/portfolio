import React, { useEffect, useRef } from 'react';

export default function CircuitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Circuit grid nodes & traces
    const gridSize = 45;
    const nodes = [];
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);

    // Pulses traveling on circuit traces
    const pulses = [];
    for (let i = 0; i < 28; i++) {
      pulses.push({
        x: Math.floor(Math.random() * cols) * gridSize,
        y: Math.floor(Math.random() * rows) * gridSize,
        dir: Math.floor(Math.random() * 4), // 0: up, 1: right, 2: down, 3: left
        speed: 1.5 + Math.random() * 1.5,
        len: 20 + Math.random() * 30,
        color: Math.random() > 0.3 ? '#00f0ff' : '#a855f7',
        life: 100 + Math.random() * 200,
        age: 0
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint grid dots
      ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
      for (let x = gridSize; x < width; x += gridSize * 2) {
        for (let y = gridSize; y < height; y += gridSize * 2) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Update and draw pulses
      pulses.forEach((p) => {
        p.age++;
        if (p.age > p.life) {
          p.x = Math.floor(Math.random() * cols) * gridSize;
          p.y = Math.floor(Math.random() * rows) * gridSize;
          p.dir = Math.floor(Math.random() * 4);
          p.age = 0;
          p.life = 100 + Math.random() * 200;
        }

        // Move
        const prevX = p.x;
        const prevY = p.y;
        if (p.dir === 0) p.y -= p.speed;
        else if (p.dir === 1) p.x += p.speed;
        else if (p.dir === 2) p.y += p.speed;
        else if (p.dir === 3) p.x -= p.speed;

        // Turn at grid intersections occasionally
        if (Math.random() < 0.04) {
          p.dir = (p.dir + (Math.random() > 0.5 ? 1 : 3)) % 4;
        }

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw glowing trace segment
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = Math.sin((p.age / p.life) * Math.PI) * 0.45;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw glowing head node
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ background: 'transparent' }}
    />
  );
}
