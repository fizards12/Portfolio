import { useStore } from "../store";
import Button from "./UI/Button/Button";

const ContactModal = () => {
  const isOpen = useStore((state) => state.contactModal);
  const setOpen = useStore((state) => state.handleContactModal);
  const closeByBackdrop = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("modal")) {
      setOpen(false);
    }
  };
  return (
    <div
      className={`modal ${isOpen ? "modal-open" : ""}`}
      onClick={closeByBackdrop}
    >
      <div className={`modal-box max-w-2xl bg-secondary-10/50`}>
        <button
          className="btn !btn-circle btn-primary btn-outline focus:outline-none text-lg font-heavy-1200 absolute right-2 top-2"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <div>
          <h1 className="text-h3-1200 font-heavy-1200 text-gradient-1">
            Can’t wait your message!
          </h1>
          <form className="flex flex-col gap-3 py-5 text-secondary-6">
            <div className="flex gap-2">
              <div className="form-control flex-1">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-md input-primary bg-transparent"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-md input-primary bg-transparent"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-md input-primary bg-transparent"
              />
            </div>
            <div className="form-control">
              <label className="label">Message</label>
              <textarea
                placeholder="Message"
                className="textarea textarea-md textarea-primary bg-transparent"
              ></textarea>
            </div>
            <div className="flex justify-start gap-3">
              <Button type="submit">Send</Button>
              <a type="button" className="btn btn-outline border-0 btn-error" onClick={() => setOpen(false)}>Cancel</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
