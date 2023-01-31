// import PropTypes from 'prop-types';
// import css from './Statisticitem.module.css';

// function getRandomHexColor() {
//   let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   return bgColor;
// }

// export const Statistics = ({ title, stats }) => {
//   return (
//     <section className={css.statistics}>
//       {title && <h2 className={css.title}>{title}</h2>}

//       <ul className={css.stats__list}>
//         {stats.map(({ id, label, percentage }) => {
//           return (
//             <li
//               className={css.stats}
//               key={id}
//               style={{ backgroundColor: getRandomHexColor() }}
//             >
//               <span className={css.label}>{label}</span>
//               <span className={css.percentage}>{percentage}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

// Statistics.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };
/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section> */