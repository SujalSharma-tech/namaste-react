const ResShimmerTemplate = () => {
  return (
    <div className="menu-card-template">
      <div className="menu-shimmer">
        <div className="menu-card-img"></div>
        <div className="res-card-info"> </div>
      </div>
    </div>
  );
};

const MenuShimmer = () => {
  return (
    <div className="menu-shimmer-container">
      <ResShimmerTemplate />
      <ResShimmerTemplate />
      <ResShimmerTemplate />
      <ResShimmerTemplate />
      <ResShimmerTemplate />
      <ResShimmerTemplate />
      <ResShimmerTemplate />
    </div>
  );
};

export default MenuShimmer;
