import type { NotARobotCard } from "~/types";
import itemsData from "./items.json";

const allImages = import.meta.glob<ImageMetadata>("./images/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

let _loadNotARobot: Promise<Array<NotARobotCard>>;

async function loadNotARobot(): Promise<Array<NotARobotCard>> {
  const items = await Promise.all(
    itemsData.map(async (item) => {
      if (!(item.image in allImages)) {
        console.error(
          `Image for "${item.title}" not found (provided: "${item.image}")`
        );
      }

      const image = await allImages[item.image];

      return {
        ...item,
        image,
      };
    })
  );

  return items;
}

export async function getNotARobot() {
  _loadNotARobot = _loadNotARobot || loadNotARobot();
  return _loadNotARobot;
}
