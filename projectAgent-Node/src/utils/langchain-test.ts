import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod/v4";
import { RunnableConfig, Runnable } from "@langchain/core/dist/runnables";
import { BaseLanguageModelInput } from "@langchain/core/dist/language_models/base";
import * as dotenv from "dotenv";

dotenv.config();
const ANTHROPIC_API_KEY: string = process.env.ANTHROPIC_API_KEY ? process.env.ANTHROPIC_API_KEY : "";
const ANTHROPIC_MODEL_VER: string = process.env.ANTHROPIC_MODEL_VER ? process.env.ANTHROPIC_MODEL_VER : "";

const model = new ChatAnthropic({
  model: ANTHROPIC_MODEL_VER,
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});

const schema = z.object({
    title: z.string().describe("Short descriptive title"),
    people: z.string().array().describe("The people associated with this object"),
    date: z.iso.datetime({offset: true}).describe("The date associated with the object in ISO standard format with timezone included")
});

type exampleObject = {
    title: string,
    people: string[],
    date: string
};

const structuredOutputModel: Runnable<
  BaseLanguageModelInput,
  Record<string, any>,
  RunnableConfig<Record<string, any>>
> = model.withStructuredOutput(schema, {includeRaw: false});

export async function structuredOutputDemo(message: string): Promise<exampleObject> {
    const parsedObject = await structuredOutputModel.invoke(message);
    const returnObject = {
        title: parsedObject.title,
        people: parsedObject.people,
        date: parsedObject.date
    };
    return returnObject;
}