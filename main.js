// Animate Smooth Scrolling

$('#introductionTab').on('click', function() {
  const introduction = $('#introduction').position().top;

  $('html, body').animate(
    {
      scrollTop: introduction
    },
    2500
  );
});

$('#firstProgramTab').on('click', function() {
  const firstProgram = $('#firstProgram').position().top;

  $('html, body').animate(
    {
      scrollTop: firstProgram
    },
    2500
  );
});

$('#basicSyntaxTab').on('click', function() {
  const basicSyntax = $('#basicSyntax').position().top;

  $('html, body').animate(
    {
      scrollTop: basicSyntax
    },
    2500
  );
});

$('#identifiersTab').on('click', function() {
  const identifiers = $('#identifiers').position().top;

  $('html, body').animate(
    {
      scrollTop: identifiers
    },
    2500
  );
});

$('#modifiersTab').on('click', function() {
  const modifiers = $('#modifiers').position().top;

  $('html, body').animate(
    {
      scrollTop: modifiers
    },
    2500
  );
});

$('#variablesTab').on('click', function() {
  const variables = $('#variables').position().top;

  $('html, body').animate(
    {
      scrollTop: variables
    },
    2500
  );
});

$('#arraysTab').on('click', function() {
  const arrays = $('#arrays').position().top;

  $('html, body').animate(
    {
      scrollTop: arrays
    },
    2500
  );
});

$('#enumsTab').on('click', function() {
  const enums = $('#enums').position().top;

  $('html, body').animate(
    {
      scrollTop: enums
    },
    2500
  );
});

$('#keywordsTab').on('click', function() {
  const keywords = $('#keywords').position().top;

  $('html, body').animate(
    {
      scrollTop: keywords
    },
    2500
  );
});

$('#commentsTab').on('click', function() {
  const comments = $('#comments').position().top;

  $('html, body').animate(
    {
      scrollTop: comments
    },
    2500
  );
});

$('#blankLinesTab').on('click', function() {
  const blankLines = $('#blankLines').position().top;

  $('html, body').animate(
    {
      scrollTop: blankLines
    },
    2500
  );
});

$('#inheritanceTab').on('click', function() {
  const inheritance = $('#inheritance').position().top;

  $('html, body').animate(
    {
      scrollTop: inheritance
    },
    2500
  );
});

$('#interfacesTab').on('click', function() {
  const interfaces = $('#interfaces').position().top;

  $('html, body').animate(
    {
      scrollTop: interfaces
    },
    2500
  );
});

$('#referenceTab').on('click', function() {
  const reference = $('#reference').position().top;

  $('html, body').animate(
    {
      scrollTop: reference
    },
    2500
  );
});
