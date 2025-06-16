const { renderPage } = require("vike");

exports.handler = async (event, context) => {
  const pageContext = await renderPage({ urlOriginal: event.rawUrl });
  if (!pageContext.httpResponse) return { statusCode: 200 };
  console.log(pageContext.httpResponse.statusCode, event.rawUrl);

  return {
    statusCode: pageContext.httpResponse.statusCode,
    headers: { "Content-Type": pageContext.httpResponse.contentType },
    body: pageContext.httpResponse.body,
  };
};
