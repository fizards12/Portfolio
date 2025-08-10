const createAppStates = (set) => ({
  contactModal: false,
  addReview: false,
  handleContactModal: (value) => set({ contactModal: value }),
  setAddReview: (value) => set({ addReview: value }),
});

export default createAppStates;
