import React, { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const App = () => {
	const contentArea = useRef(null);
	const handleExportWithFunction = (event) => {
		savePDF(contentArea.current, { paperSize: "A4" });
		// contentArea.current.save();
	};
	return (
		<PDFExport>
			<button onClick={handleExportWithFunction}>Générer pdf</button>
			<p ref={contentArea}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis dignissimos fugiat iusto
				illo sed eos ea ducimus voluptates eaque totam accusantium veritatis ut, sint, cum assumenda. Fugit
				numquam voluptatem quam ipsum. Corrupti totam ad labore, soluta quas molestias perferendis obcaecati
				aut, veritatis quos enim nobis dicta! Cumque nam ipsam dolorum labore accusantium eos illum porro
				aperiam at, aut minima minus libero quo ab vel doloremque nostrum, corrupti inventore officia hic, eum a
				alias sapiente rerum! Quae praesentium voluptates quas voluptatibus tempora modi aspernatur assumenda
				dolorem unde nesciunt maiores voluptatem labore laudantium, blanditiis velit aliquam quidem? Neque, in
				cumque! A corrupti dolorem necessitatibus quis blanditiis vero hic commodi harum qui repellendus id quod
				quae neque dolore ex illo expedita quibusdam, error, consectetur distinctio. Modi expedita similique
				obcaecati, quod, voluptates aut sequi, autem a quaerat iusto vero laborum quis earum corrupti ducimus
				esse voluptatibus praesentium ab delectus debitis? Dolorum, modi porro in aut, maxime corrupti,
				consectetur nostrum cumque velit reprehenderit odit officia laborum consequatur facilis exercitationem
				culpa eaque. Eos molestias accusantium ullam est atque, ratione, iusto repudiandae tempore saepe alias
				cumque, nisi ad ex? Molestiae, nisi! Repellat ipsam, ipsum optio omnis nobis architecto animi! Placeat
				numquam aperiam obcaecati voluptatem natus! Doloremque praesentium ut maiores explicabo accusamus
				minima? Quibusdam, ducimus nihil nam reprehenderit omnis exercitationem eveniet impedit, voluptatem est
				expedita repellat blanditiis velit, quam esse aliquam quia vitae explicabo laboriosam nesciunt odio
				saepe iste sed necessitatibus repudiandae. Quasi officiis, eligendi optio doloremque eum nesciunt non
				quis temporibus, accusamus ab odit. Eos similique suscipit unde at officiis voluptates praesentium
				sapiente earum ab alias fuga sequi optio adipisci quaerat voluptatem asperiores fugit, nobis est fugiat
				temporibus laborum molestias. Deserunt harum, pariatur aperiam voluptatibus rem quo est perspiciatis
				corporis, veritatis nobis eius nihil ea obcaecati ullam autem, quidem beatae cum ut quos! Iure, in
				consectetur. Molestias, quos! Maiores aperiam amet dolorum quos! Cum blanditiis ut rerum vel fuga vero
				odit repellat illo, ratione id, quisquam placeat quos earum sequi sint veritatis suscipit? Deserunt
				similique, enim sunt quidem odio, natus ex minus accusantium placeat consequuntur dolores. Soluta, qui
				iure fugit repellat consequuntur corrupti exercitationem voluptatum necessitatibus doloribus, minus quo
				aperiam blanditiis omnis distinctio facere quas voluptas tempora asperiores illum repudiandae iste
				possimus cupiditate! Asperiores expedita corrupti dolorum veritatis, molestias aperiam voluptatum ab
				soluta, labore sed rem laborum vitae maxime autem eum! Commodi quidem ipsum a explicabo accusantium
				minima quia nobis. Fuga omnis nulla reprehenderit saepe ipsa molestias enim temporibus corporis hic ea,
				reiciendis sint sunt in asperiores maiores provident non iste doloremque praesentium perspiciatis
				quisquam id magnam? Quibusdam, quas qui? Beatae dolor, debitis modi fugiat obcaecati quisquam eaque
				consequuntur, molestias quod omnis eos maiores eligendi. Omnis, maiores iusto. Qui architecto natus
				ducimus, nisi, beatae ab aspernatur fuga nesciunt vel perspiciatis cum iure molestiae neque inventore
				odit hic nam, a magni tempore quia ipsam fugit pariatur error. Officiis tempora blanditiis corrupti
				debitis? Veniam expedita dolore qui pariatur earum harum, doloremque incidunt exercitationem sunt rerum
				velit ipsam natus! Error, numquam. Ullam, temporibus exercitationem non sapiente culpa rerum facilis.
			</p>
		</PDFExport>
	);
};

export default App;
