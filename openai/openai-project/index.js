const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-n7MqLnFfhCgGUtmwQ6RK9wLI",
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const testFn = async () => {
  console.log('openai', openai)
  // console.log(111)
  // const response = await openai.listEngines();
  // console.log(222)
  // console.log('response ==>', response)
}

testFn()



