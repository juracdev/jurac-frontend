import runDroptext from './features/common/droptext';
import runModal from './features/common/modal';

import runVotes from './features/votes';
import runFilterTables from './features/filter-tables';

import './styles/main.css';
import './features/common/unborder-table/unborder-table.css';
import './features/common/line-table/line-table.css';
import './features/common/sticker/sticker.css';
import './features/common/tabs/tabs.css';
import './features/common/icon-link/icon-link.css';
import './features/common/feedback-form/feedback-form.css';
import './features/questions/questions.css';
import './features/main-header/main-header.css';
import './features/image-effects/image-effects.css';
import './features/dpo-courses/dpo-courses.css';

import './assets/icons/at.svg';
import './assets/icons/phone.svg';
import './assets/icons/vk.svg';
import './assets/icons/wave.svg';

import './features/common/photo-card/photo-card.css';
import './assets/img/ae.jpg';
import './assets/img/ep.jpg';
import './assets/img/nv.jpg';
import './assets/img/ov.jpg';
import './assets/img/koni.jpg';

// Common
runModal();
runDroptext();

// Features
const chartsRoot = document.getElementById('chartsRoot');

if (chartsRoot) {
  runVotes(chartsRoot);
}

const filterTables = document.getElementById('filter-tables');

if (filterTables) {
  runFilterTables(filterTables);
}
