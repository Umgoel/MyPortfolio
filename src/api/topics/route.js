import ConnectDB from "../../libs/mongodb";
import Topic from "../../models/topic"; 

export async function POST(request) {
  const { title, desc } = await request.json();
  await ConnectDB();
  await Topic.create({ title, desc });
  return Response.json({ message: "Topic Created" }, { status: 201 });
}

