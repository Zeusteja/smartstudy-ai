export function smartCalculator(expr: string): string {
    try {
      const result = eval(expr);
      return `🧮 The result of ${expr} is **${result}**.`;
    } catch {
      return "⚠️ I couldn't calculate that. Maybe use actual math next time 😅";
    }
  }
  
  export function randomTheorem() {
    const theorems = [
      "📐 Fermat's Last Theorem: No three positive integers a, b, c satisfy aⁿ + bⁿ = cⁿ for n > 2.",
      "🌀 Gödel’s Incompleteness Theorem: Some truths can’t be proven. Mind = blown.",
      "🧮 Pythagorean Theorem: a² + b² = c². Classic, like 90s cartoons.",
      "🧠 Cantor’s Diagonal Argument: Infinity comes in sizes. Yup."
    ];
    return theorems[Math.floor(Math.random() * theorems.length)];
  }
  
  export function mathRoast() {
    const roasts = [
      "😏 That question was so easy, even a TI-84 would roll its eyes.",
      "😂 You’ve offended Pythagoras himself.",
      "💀 Euler just unsubscribed from math because of that.",
      "🥴 Try harder. This ain't kindergarten algebra."
    ];
    return roasts[Math.floor(Math.random() * roasts.length)];
  }
  
  export function plotFunction(expr: string): string {
    return `📈 Pretend there's a graph of "${expr}". I'm a chatbot, not Desmos, okay? 😅`;
  }
  
  export function getPhysicsConstant(name: string): string {
    const constants: Record<string, string> = {
      gravity: "🌍 g = 9.8 m/s² (Earth only. Mars not included.)",
      c: "⚡ c = 3.00 × 10⁸ m/s (Speed of light... unless you’re Flash)",
      planck: "🪐 h = 6.626 × 10⁻³⁴ Js (Planck. Not plank.)",
      boltzmann: "🌡️ k = 1.38 × 10⁻²³ J/K (Helps explain why atoms party harder when it's hot)"
    };
  
    const key = name.toLowerCase();
    return constants[key] || "🤔 That constant’s probably still being discovered by NASA.";
  }
  
  export function randomPhysicsParadox() {
    const paradoxes = [
      "🌀 Twin Paradox: You age slower on a spaceship. Einstein’s way of saying 'travel more'.",
      "🔁 Bootstrap Paradox: A time traveler gives Beethoven his own music. Who composed it first?",
      "🪞 Quantum Superposition: Things exist in multiple states... until you check. Like your grades."
    ];
    return paradoxes[Math.floor(Math.random() * paradoxes.length)];
  }
  
  export function askEinstein() {
    const quotes = [
      "🧠 'Imagination is more important than knowledge.' – Einstein",
      "⏳ 'The only reason for time is so everything doesn’t happen at once.' – Einstein",
      "🌌 'Reality is merely an illusion, albeit a very persistent one.' – Einstein",
      "📚 'Don’t memorize — understand.' – Einstein (probably frustrated with school)"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  export function molecularWeight(name: string): string {
    const known: Record<string, string> = {
      water: "💧 H₂O = 18.015 g/mol",
      co2: "🌫️ CO₂ = 44.01 g/mol",
      glucose: "🍬 C₆H₁₂O₆ = 180.16 g/mol",
      nacl: "🧂 NaCl = 58.44 g/mol"
    };
  
    const key = name.toLowerCase();
    return known[key] || "🔬 That molecule’s either too rare or imaginary.";
  }
  
  export function bondExplain(bond: string): string {
    const bonds: Record<string, string> = {
      ionic: "🧲 Ionic Bond: Like giving your electron to someone and never asking it back.",
      covalent: "🤝 Covalent Bond: Sharing is caring — equal or not.",
      hydrogen: "💧 Hydrogen Bond: Weak but essential — like a clingy friendship.",
      metallic: "⚙️ Metallic Bond: Electrons just vibing freely among atoms."
    };
  
    const key = bond.toLowerCase();
    return bonds[key] || "🧪 That’s not a real bond. Try Tinder instead.";
  }
  
  export function chemistryJoke() {
    const jokes = [
      "🧪 I told a joke about noble gases... no reaction.",
      "🔬 Gold is the best element. It’s AU-some.",
      "☢️ I would tell you a chemistry joke, but I know I wouldn't get a reaction.",
      "🍷 Why do chemists like nitrates so much? They're cheaper than day rates."
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }
  
  export function randomLabTip() {
    const tips = [
      "🧤 Always wear gloves unless you like surprise tattoos from acid.",
      "🧯 Don’t heat a closed container. Trust me.",
      "🥼 Lab coat = armor. Coffee stains don’t count.",
      "🔥 Never taste the chemicals. You’re not in MasterChef."
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  }
  
  export function topicRecommender(): string {
    const topics = ["Thermodynamics", "Data Structures", "Organic Chemistry", "Probability", "Vectors"];
    const pick = topics[Math.floor(Math.random() * topics.length)];
    return `🎯 Today’s suggested topic is: **${pick}**. Give it a go!`;
  }
  
  export function dailyPlanner(): string {
    return `🗓️ Your plan today:\n- 📘 Revise Algebra\n- 🎧 Watch 1 concept video\n- 🧠 Quiz yourself (10 questions)\n- ☕ Take a break!`;
  }
  