import BackButton from "@/components/back-button";
import ClientGallery from "@/components/client-gallery";
import { LATEST_PROJECTS } from "@/utils/consts";

const ClientDetailPage = async ({ params }: { params: { client: string } }) => {
  const clientName = decodeURIComponent(params.client);

  const project = LATEST_PROJECTS.find(
    (project) => project.client === clientName
  );

  if (!project) {
    return <div className="text-white p-10">Client not found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <BackButton />

      <div className="app-container py-[100px]">
        <h1 className="font-costaline text-7xl mt-10 text-center mb-20">
          {clientName}
        </h1>

        <ClientGallery images={project.all_images} title={clientName} />
      </div>
    </div>
  );
};

export default ClientDetailPage;
