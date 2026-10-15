// Keep existing lesson URLs working while the roadmap owns the reading view.
(function(){
  const chapter=location.pathname.match(/\/thuat-toan\/(chapter\d{2})\.html$/)?.[1];
  if(chapter)location.replace(new URL('../roadmap/thuat-toan.html#'+chapter,location.href));
})();
