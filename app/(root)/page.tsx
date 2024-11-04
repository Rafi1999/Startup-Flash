import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query
  const posts = [{
    _createdAt : new Date(),
    title : "Tech Park",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst",
    category : "Technology",
    _id : 1,
    views : 55,
    author : {_id : 1, name : "Adrian"},
    image : "https://images.unsplash.com/photo-1600596525163-36b26caa9c89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neSUyMHBhcmt8ZW58MHx8MHx8fDA%3D"
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup,<br/>
        Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition</p>
      <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">{query ? `Search resuls for "${query}"` : "All Startups"}</p>
      <ul className="mt-7 card_grid">
        {
          posts?.length > 0 ? (
            posts?.map((post:StartupCardType, index) => (
              <StartupCard key={post?._id} post={post}></StartupCard>
            ))
          ) : (<p className="text-14-regular">No startups found</p>
   )
        }
      </ul>
      </section>
    </>
  );
}
