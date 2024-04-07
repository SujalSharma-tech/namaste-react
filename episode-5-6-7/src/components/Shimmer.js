const ResShimmerTemplate = () => {
  return (
    <div className="res-card-template">
      <div className="res-shimmer">
        <div className="res-card-img"></div>
        <div className="res-card-info">
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <ResShimmerTemplate />
      <ResShimmerTemplate />
      <ResShimmerTemplate />
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

export default Shimmer;
