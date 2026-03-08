import PostHero from "@/components/page/blog-detail/PostHero";
import PostBody from "@/components/page/blog-detail/PostBody";
import NewsletterCTA from "@/components/page/blog-detail/NewsletterCTA";

export default function BlogPost() {
    return (
        <main>
            <PostHero
                category="Web Development"
                title="Legacy Analytics Tools Hamper Tactical Capital Allocation in Lending. Here’s How to Upgrade Them"
            />
            <PostBody
                content={
                    <p>
                        Post content here — from Sanity later Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Nemo, soluta esse
                        corporis temporibus velit illum ex molestiae nihil.
                        Dignissimos deleniti veniam placeat, quibusdam commodi
                        tempora quasi non earum autem voluptas quisquam impedit
                        laboriosam nihil debitis perferendis modi fuga error, id
                        voluptates itaque dolorem ullam aspernatur! Blanditiis
                        voluptatibus quos quo eaque facilis error nobis optio
                        iure, delectus ut, illum iste maxime eligendi. In eos
                        nobis omnis adipisci soluta esse. Dolores, dicta, fuga
                        voluptas asperiores in, reiciendis excepturi accusamus
                        ipsam aspernatur molestiae nobis facilis quos unde
                        facere! Reiciendis porro itaque doloremque blanditiis
                        sit. Facere praesentium nulla omnis repellat inventore.
                        Ad tenetur architecto odit, praesentium possimus
                        aspernatur. Soluta aliquam alias suscipit. Quaerat,
                        laboriosam et ab eligendi architecto dolorem explicabo
                        facere officia hic soluta quia quidem! Voluptatum,
                        labore autem quia dolores soluta quasi natus voluptates
                        mollitia odio ipsa impedit nobis adipisci consequatur
                        dignissimos sapiente. Deleniti est repellendus, quia
                        recusandae similique dolore corrupti incidunt quidem
                        aperiam iure eaque, maiores labore! Ipsam aspernatur eum
                        rem expedita id libero sint veniam fuga, placeat
                        reprehenderit molestias numquam hic reiciendis, alias at
                        quaerat nisi dolores? Cum exercitationem voluptates
                        tempore excepturi ut harum ratione quas voluptas labore
                        unde. Nisi dolorem ut soluta exercitationem dolores
                        quaerat quod aliquam distinctio quasi totam?
                    </p>
                }
                headings={[]}
            />
            <NewsletterCTA />
        </main>
    );
}
