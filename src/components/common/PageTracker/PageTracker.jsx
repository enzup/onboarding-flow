import "./PageTracker.scss";

const PageTracker = (props) => {
  const pages = [1, 2, 3, 4];

  return (
    <div className="page-tracker-container">
      {pages.map((page, i) => (
        <div
          key={page}
          className={
            "page-tracker-box" + (props.currentPage > i ? " active" : "")
          }
        >
          {i !== 0 && <div className="page-tracker-line"></div>}
          <div
            className="page-tracker-number-container"
            onClick={
              props.currentPage > i
                ? () => props.onPageChange(i + 1)
                : undefined
            }
          >
            <div className="page-tracker-number">{page}</div>
          </div>
          {i !== pages.length - 1 && <div className="page-tracker-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default PageTracker;
