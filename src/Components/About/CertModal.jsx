import React from 'react'

function CertModal({ cert, className = '', ...props }, ref) {
    return (
        <>
            <dialog ref={ref} id="cert-modal" className={`modal`} {...props}>
                <div className={`modal-box bg-secondary-10/50 ${className}`}>
                    <button className="btn !btn-circle btn-primary btn-outline focus:outline-none text-lg font-heavy-1200 absolute right-2 top-2"
                        onClick={() => document.getElementById("cert-modal").close()}>✕</button>
                    <img src={cert.cert} alt={cert.name} className="w-full h-full object-contain" />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default React.forwardRef(CertModal)