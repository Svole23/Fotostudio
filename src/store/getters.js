const getters = {
  // pages
  getPagesSrb: state => state.pagesSrb.map(page => page),
  getPagesEn: state => state.pagesEn.map(page => page),
  //services
   getServicesSrb: state => state.servicesSrb.map(service => service),
   getServicesEn: state => state.servicesEn.map(service => service),
  //page by slug
  getPageBySlugSrb: state => slug => state.pagesSrb.find(page => page.slug === slug),
  getPageBySlugEn: state => slug => state.pagesEn.find(page => page.slug === slug),
  //page-sections by slug
  //getPageSectionsBySlugSrb: state => slug => state.sections.filter(section => section.fields.page === slug),
  //getPageSectionsBySlugEn: state => slug => state.sections.filter(section => section.fields.page === slug),
}

export default getters
