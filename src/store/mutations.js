const mutations = {
  setSidebarOpen (state, isOpen) {
    state.isSidebarOpen = isOpen
  },
  setMemberDetailOpen (state, isOpen) {
    state.isMemberOpen = isOpen
  },
  setMenuOpen (state, value) {
  	console.log(value)
  	state.isMenuOpen = value
  }
}

export default mutations
