import Card from "@/components/common/Card";

const Home = () => {
  return (
    <section>
      <header>
        <h1 className="text-3xl font-bold text-green-600">Blog Post</h1>
      </header>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Card title="Card Title 1" content="This is the content of the first card." />
            <Card title="Card Title 2" content="This is the content of the second card." />
            <Card title="Card Title 3" content="This is the content of the third card." />
            <Card title="Card Title 3" content="This is the content of the third card." />
            <Card title="Card Title 3" content="This is the content of the third card." />
            <Card title="Card Title 3" content="This is the content of the third card." />
       </main>
    </section>
  )
}

export default Home;