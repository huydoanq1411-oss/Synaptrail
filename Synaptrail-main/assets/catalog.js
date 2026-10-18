/* Role selection filters existing skill cards without changing lesson routes. */
(() => {
  const roleButtons = [...document.querySelectorAll('.role-box')];
  const skillCards = [...document.querySelectorAll('#allCourses .card')];
  const otherCards = [...document.querySelectorAll('#best-practices .resource-card, #project-ideas .resource-card')];
  const input = document.getElementById('searchInput');
  const reset = document.getElementById('showAllSkills');
  const normalize = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g,'d');
  let selected = null;
  function update() {
    const query = normalize(input.value.trim());
    const keys = selected ? selected.dataset.skills.split(' ') : null;
    let count = 0;
    for (const card of skillCards) {
      const matches = (!keys || keys.includes(card.dataset.skill)) && normalize(card.dataset.name + ' ' + card.textContent).includes(query);
      card.hidden = !matches;
      card.style.display = matches ? '' : 'none';
      if (matches) count++;
    }
    document.getElementById('searchStatus').textContent = count + ' kỹ năng' + (query ? ' phù hợp với tìm kiếm' : ' có thể bắt đầu');
    document.getElementById('emptyState').style.display = count ? 'none' : 'block';
    let others = 0;
    for (const card of otherCards) {
      const matches = normalize(card.textContent).includes(query);
      card.hidden = !matches;
      card.style.display = matches ? '' : 'none';
      if (matches) others++;
    }
    document.getElementById('resourceEmpty').hidden = !query || others > 0;
    document.getElementById('roleStatus').textContent = selected ? 'Kỹ năng cho ' + selected.querySelector('.role-box-title').textContent : 'Đang xem tất cả kỹ năng';
    reset.hidden = !selected;
    roleButtons.forEach(button => button.setAttribute('aria-pressed', String(button === selected)));
  }
  roleButtons.forEach(button => button.addEventListener('click', () => {
    selected = button;
    update();
    const title = document.getElementById('skill-based-title');
    title.focus({preventScroll:true});
    title.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',block:'start'});
  }));
  reset.addEventListener('click', () => {selected = null; update(); document.getElementById('skill-based-title').focus({preventScroll:true});});
  input.addEventListener('input',update);
  update();
})();
