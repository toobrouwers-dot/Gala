const game = {
    scores: { user: 0, partner: 0 },
    achievements: [],
    currentPhase: "🚗 Heenreis",
    init() {
        const select = document.getElementById('phase-select');
        db.phases.forEach(p => select.innerHTML += `<option value="${p}">${p}</option>`);
        ui.renderBingo();
        ui.renderQuests();
    },
    updateScore(amount) { this.scores.user += amount; document.getElementById('score-user').textContent = this.scores.user; },
    changePhase() { this.currentPhase = document.getElementById('phase-select').value; document.getElementById('challenge-text').innerText = `Start ${this.currentPhase}`; },
    nextChallenge() { const list = db.challenges[this.currentPhase]; document.getElementById('challenge-text').textContent = list[Math.floor(Math.random() * list.length)]; this.updateScore(1); },
    completeQuest(id, pts, el) { if(!this.achievements.includes(id)) { this.achievements.push(id); this.updateScore(pts); el.classList.add('completed'); } }
};
const ui = {
    switchView(id) { document.querySelectorAll('.view').forEach(v => v.classList.add('hidden')); document.getElementById(`view-${id}`).classList.remove('hidden'); },
    renderBingo() { const grid = document.getElementById('bingo-grid'); db.bingoItems.forEach(item => { const el = document.createElement('div'); el.className = 'bingo-item'; el.textContent = item; el.onclick = () => { el.classList.toggle('active'); game.updateScore(5); }; grid.appendChild(el); }); },
    renderQuests() { const list = document.getElementById('quest-list'); db.quests.forEach(q => { const div = document.createElement('div'); div.className = 'quest-card'; div.innerHTML = `<div><strong>${q.title}</strong><p>${q.desc}</p></div><span>+${q.pts}</span>`; div.onclick = () => game.completeQuest(q.id, q.pts, div); list.appendChild(div); }); }
};
game.init();
