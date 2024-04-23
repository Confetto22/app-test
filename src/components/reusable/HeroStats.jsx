const HeroStats = (props) => {
  return (
    <div className="hero_stats">
      <p className="figure">
        {props.figure} <span className="plus">{props.span}</span>
      </p>
      <p className="stats_text"> {props.text} </p>
    </div>
  );
};

export default HeroStats;
