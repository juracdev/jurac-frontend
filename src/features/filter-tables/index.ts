const runFilterTables = (rootEl: HTMLElement) => {
  const input = rootEl.querySelector('#filter-tables-input')!;
  const list = rootEl.querySelector('#filter-tables-list')!;
  const rows = list.querySelectorAll('tbody tr');

  input.addEventListener('input', (evt) => {
    const target = evt.target as HTMLInputElement;
    const inputValue = target.value;

    rows.forEach((row) => {
      const attr = row.getAttribute('data-lastname')!;

      if (!inputValue) {
        row.classList.remove('visually-hidden');
        return;
      }

      if (attr.toLowerCase().includes(inputValue.toLowerCase())) {
        row.classList.remove('visually-hidden');
      } else {
        row.classList.add('visually-hidden');
      }
    });
  });
};

export default runFilterTables;
