const { renderPage } = require("vike/server");

exports.handler = async (event) => {
  try {
    const pageContext = await renderPage({ urlOriginal: event.rawUrl });

    if (!pageContext.httpResponse) {
      return {
        statusCode: 200,
        body: '',
      };
    }

    const { statusCode, contentType, body } = pageContext.httpResponse;

    return {
      statusCode,
      headers: { 'Content-Type': contentType },
      body,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Erreur serveur : ' + err.message + '\n\n' + err.stack,
    };
  }
};
