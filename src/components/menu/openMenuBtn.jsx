const OpenMenuBtn = ()=>{
    return(
        <button
        className="menu-btn resp-hide mx-2 my-4"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        >
        <i className="bi bi-list"></i>
        </button>
    )
}
export default OpenMenuBtn