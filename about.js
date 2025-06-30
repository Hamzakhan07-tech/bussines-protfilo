// home.js – Mouse-Reactive Particle Background

const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = {
  x: undefined,
  y: undefined
};

const colors = ["#38bdf8", "#0ea5e9", "#0284c7"];

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

class Particle {
  constructor(x, y, size, color, velocity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // bounce off edges
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.velocity.x *= -1;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.velocity.y *= -1;
    }

    // move toward mouse
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 120) {
      this.x -= dx * 0.02;
      this.y -= dy * 0.02;
    }

    this.draw();
  }
}

let particlesArray;

function init() {
  particlesArray = [];
  const num = 100;
  for (let i = 0; i < num; i++) {
    let size = Math.random() * 3 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = colors[Math.floor(Math.random() * colors.length)];
    let velocity = {
      x: (Math.random() - 0.5) * 1.5,
      y: (Math.random() - 0.5) * 1.5
    };
    particlesArray.push(new Particle(x, y, size, color, velocity));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((particle) => particle.update());
  requestAnimationFrame(animate);
}

init();
animate();
// about.js – Mouse-Reactive Particle Background (Fixed Version)

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  let mouse = {
    x: undefined,
    y: undefined
  };

  const colors = ["#38bdf8", "#0ea5e9", "#0284c7"];

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });

  class Particle {
    constructor(x, y, size, color, velocity) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.velocity = velocity;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      // Bounce from edges
      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.velocity.x *= -1;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.velocity.y *= -1;
      }

      // Mouse attraction
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        this.x -= dx * 0.02;
        this.y -= dy * 0.02;
      }

      this.draw();
    }
  }

  let particlesArray;

  function init() {
    particlesArray = [];
    const num = 100;
    for (let i = 0; i < num; i++) {
      let size = Math.random() * 3 + 1;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let color = colors[Math.floor(Math.random() * colors.length)];
      let velocity = {
        x: (Math.random() - 0.5) * 1.5,
        y: (Math.random() - 0.5) * 1.5
      };
      particlesArray.push(new Particle(x, y, size, color, velocity));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => particle.update());
    requestAnimationFrame(animate);
  }

  init();
  animate();
});
// services.js – Mouse-Reactive Particle Background

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  let mouse = {
    x: undefined,
    y: undefined
  };

  const colors = ["#38bdf8", "#0ea5e9", "#0284c7"];

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });

  class Particle {
    constructor(x, y, size, color, velocity) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.velocity = velocity;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.velocity.x *= -1;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.velocity.y *= -1;
      }

      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        this.x -= dx * 0.02;
        this.y -= dy * 0.02;
      }

      this.draw();
    }
  }

  let particlesArray;

  function init() {
    particlesArray = [];
    const num = 100;
    for (let i = 0; i < num; i++) {
      let size = Math.random() * 3 + 1;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let color = colors[Math.floor(Math.random() * colors.length)];
      let velocity = {
        x: (Math.random() - 0.5) * 1.5,
        y: (Math.random() - 0.5) * 1.5
      };
      particlesArray.push(new Particle(x, y, size, color, velocity));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => particle.update());
    requestAnimationFrame(animate);
  }

  init();
  animate();
});
// projects.js – Mouse-Reactive Particle Background

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  let mouse = {
    x: undefined,
    y: undefined
  };

  const colors = ["#38bdf8", "#0ea5e9", "#0284c7"];

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });

  class Particle {
    constructor(x, y, size, color, velocity) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.velocity = velocity;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.velocity.x *= -1;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.velocity.y *= -1;
      }

      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        this.x -= dx * 0.02;
        this.y -= dy * 0.02;
      }

      this.draw();
    }
  }

  let particlesArray;

  function init() {
    particlesArray = [];
    const num = 100;
    for (let i = 0; i < num; i++) {
      let size = Math.random() * 3 + 1;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let color = colors[Math.floor(Math.random() * colors.length)];
      let velocity = {
        x: (Math.random() - 0.5) * 1.5,
        y: (Math.random() - 0.5) * 1.5
      };
      particlesArray.push(new Particle(x, y, size, color, velocity));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => particle.update());
    requestAnimationFrame(animate);
  }

  init();
  animate();
});// builder.js – Particle Background Animation

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  let mouse = {
    x: undefined,
    y: undefined
  };

  const colors = ["#38bdf8", "#0ea5e9", "#0284c7"];

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });

  class Particle {
    constructor(x, y, size, color, velocity) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.velocity = velocity;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.velocity.x *= -1;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.velocity.y *= -1;
      }

      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        this.x -= dx * 0.02;
        this.y -= dy * 0.02;
      }

      this.draw();
    }
  }

  let particlesArray;

  function init() {
    particlesArray = [];
    const num = 100;
    for (let i = 0; i < num; i++) {
      let size = Math.random() * 3 + 1;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let color = colors[Math.floor(Math.random() * colors.length)];
      let velocity = {
        x: (Math.random() - 0.5) * 1.5,
        y: (Math.random() - 0.5) * 1.5
      };
      particlesArray.push(new Particle(x, y, size, color, velocity));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => particle.update());
    requestAnimationFrame(animate);
  }

  init();
  animate();
});
// contact.js – Glowing Particle Background

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  let mouse = {
    x: undefined,
    y: undefined
  };

  const colors = ["#38bdf8", "#0ea5e9", "#0284c7"];

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });

  class Particle {
    constructor(x, y, size, color, velocity) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.velocity = velocity;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.velocity.x *= -1;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.velocity.y *= -1;
      }

      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        this.x -= dx * 0.02;
        this.y -= dy * 0.02;
      }

      this.draw();
    }
  }

  let particlesArray;

  function init() {
    particlesArray = [];
    const num = 100;
    for (let i = 0; i < num; i++) {
      let size = Math.random() * 3 + 1;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let color = colors[Math.floor(Math.random() * colors.length)];
      let velocity = {
        x: (Math.random() - 0.5) * 1.5,
        y: (Math.random() - 0.5) * 1.5
      };
      particlesArray.push(new Particle(x, y, size, color, velocity));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => particle.update());
    requestAnimationFrame(animate);
  }

  init();
  animate();
});
document.querySelectorAll('.float-img').forEach((img) => {
  let angle = 0;
  setInterval(() => {
    angle += 0.05;
    img.style.transform = `translateY(${Math.sin(angle) * 8}px)`; // up/down
  }, 30);
});
