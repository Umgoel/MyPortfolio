import { format } from "date-fns";
export default function Image(props) {
    // console.log(props);
  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5">
        <img
          src={props.urls.small}
          alt={props.user.name}
          loading="lazy"
          className="h-52 w-full object-cover rounded-3xl md:h-80"
        />
        //to be removed
        <div className="pt-5 text-slate-800 flex">
          <img
            src={props.user.profile_image.large}
            // className="w-12 h-12 rounded-full"
            alt={props.user.name}
            loading="lazy"
            className="rounded-full w-20 shadow"
          />
          <ul className="ml-5 pt-5">
            {/* <li>{props.user.name}</li> */}
            <li>{props.user.location}</li>
            <li>{format(new Date(props.created_at), "dd MMMM yyyy")}</li>
          </ul>
        </div>
      </article>
    </>
  );
}

