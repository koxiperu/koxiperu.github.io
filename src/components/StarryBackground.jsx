import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let meteors = [];
    let width, height;
    let meteorInterval;
    let starCount;
    let connectionDistance;

    const mouse = { x: -1000, y: -1000 }; // Start off-screen

    // Configuration
    const STAR_BASE_SIZE = 1;
    const STAR_MAX_SIZE = 5;
    const METEOR_COLOR = '#ffffff'; // Changed to white

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Responsive configuration
      // Approximately 2000 stars for 1920x1080 (2M pixels / 1000 = 2000)
      starCount = Math.floor((width * height) / 1000);
      
      // Responsive connection distance
      // Min 60px, Max 100px, or 10% of width
      connectionDistance = Math.max(60, Math.min(100, width * 0.1));

      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * STAR_BASE_SIZE + 0.5,
          baseAlpha: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const spawnMeteor = () => {
        //const x = Math.random() * width;
        //const y = Math.random() * height * 0.5; // Spawn in upper half
        meteors.push({
            x: Math.random() > 0.5 ? Math.random() * width : -50, // Either random top or left
            y: Math.random() > 0.5 ? -50 : Math.random() * height * 0.5, 
            vx: (Math.random() + 0.5) * 4, // Fast speed right
            vy: (Math.random() + 0.5) * 4, // Fast speed down
            len: Math.random() * 80 + 20,
            size: Math.random() * 2 + 1,
            life: 1, // Opacity/Life
        });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Stars
      stars.forEach(star => {
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let alpha = star.baseAlpha;
        let size = star.size;

        if (distance < connectionDistance) {
          const factor = 1 - distance / connectionDistance;
          alpha += factor * 0.8;
          size += factor * (STAR_MAX_SIZE - STAR_BASE_SIZE);
        }

        if (alpha > 1) alpha = 1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
        
        if (distance < connectionDistance) {
           ctx.shadowBlur = 10 * (1 - distance / connectionDistance);
           ctx.shadowColor = "#38bdf8"; // Matches brand-accent
           
           if (distance < connectionDistance * 0.6) {
              const rayFactor = 1 - distance / (connectionDistance * 0.6);
              const rayLength = size * 2.5 + (rayFactor * 8); 
              const rayAlpha = rayFactor * 0.8;
              
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${rayAlpha})`;
              ctx.lineWidth = 0.8;
              
              ctx.moveTo(star.x - rayLength, star.y);
              ctx.lineTo(star.x + rayLength, star.y);
              
              ctx.moveTo(star.x, star.y - rayLength);
              ctx.lineTo(star.x, star.y + rayLength);
              
              const diagLength = rayLength * 0.5;
              ctx.moveTo(star.x - diagLength, star.y - diagLength);
              ctx.lineTo(star.x + diagLength, star.y + diagLength);
              ctx.moveTo(star.x + diagLength, star.y - diagLength);
              ctx.lineTo(star.x - diagLength, star.y + diagLength);
              
              ctx.stroke();
           }
        } else {
           ctx.shadowBlur = 0;
        }
      });

      // Draw Meteors
      meteors.forEach((meteor, index) => {
          meteor.x += meteor.vx;
          meteor.y += meteor.vy;
          meteor.life -= 0.01;

          if (meteor.life <= 0 || meteor.x > width || meteor.y > height) {
              meteors.splice(index, 1);
              return;
          }

          ctx.beginPath();
          // Head
          ctx.arc(meteor.x, meteor.y, meteor.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${meteor.life})`; 
          ctx.fill();

          // Tail
          const gradient = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x - meteor.vx * 10, meteor.y - meteor.vy * 10);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.life})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.beginPath();
          ctx.moveTo(meteor.x, meteor.y);
          ctx.lineTo(meteor.x - meteor.vx * (meteor.len / 4), meteor.y - meteor.vy * (meteor.len / 4));
          ctx.strokeStyle = gradient;
          ctx.lineWidth = meteor.size;
          ctx.stroke();
          
          ctx.shadowBlur = 10;
          ctx.shadowColor = METEOR_COLOR;
      });
      // Reset shadow for stars
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e) => {
      if (e.target.closest('.no-star-interaction')) {
        mouse.x = -1000;
        mouse.y = -1000;
        return;
      }
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    init();
    draw();
    meteorInterval = setInterval(spawnMeteor, 2000);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearInterval(meteorInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Behind everything
        pointerEvents: 'none' // Let clicks pass through
      }}
    />
  );
};

export default StarryBackground;
