const data = JSON.parse(context.pullRequest.body);
if (!data.name || !data.species || !data.description) {
  context.fail("Invalid data: required fields missing");
}
