import { useFetcher } from "react-router-dom";

export function ConfirmAlert({ onClose }) {
  const fetcher = useFetcher();

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete your profile?</p>
        <div>
          <fetcher.Form
            method="post"
            action="/delete-profile"
            className="modal-form"
          >
            <button type="submit" onSubmit={onClose} className="btn btn-danger">
              Confirm
            </button>
          </fetcher.Form>
          <button onClick={onClose} className="btn btn-primary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
