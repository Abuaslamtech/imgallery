const Pagination = ({onNext, onPrev, currentPage}) => {
    return (
        <div className="page">
            <button disabled={currentPage === 1} className="prev" onClick={onPrev}> Prev </button>
            <div className="plist">
                <div className="p"></div>
                <div className="p"></div>
                <div className="p">{currentPage}</div>
                <div className="p"></div>
                <div className="p"></div>
            </div>
            <button disabled={currentPage === 100} className="next" onClick={onNext}>Next</button>
        </div>
     );
}
 
export default Pagination;