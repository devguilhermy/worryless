import { Path, GET } from "typescript-rest";
import { responseOk } from "../helpers";
import { version } from "../../package.json";

@Path("/")
class Health {
    @GET
    index(): { status: String; version: String } {
        return responseOk("Server is up!", { status: "up", version });
    }
}
