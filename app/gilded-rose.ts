export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === "Aged Brie") {
        this.incrementQuality(item);
      } else if (item.name === "Sulfuras, Hand of Ragnaros") {
        // do nothing
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstagePassQuality(item);
      } else {
        this.decrementQuality(item);
      }
      item.sellIn--;
      if (item.sellIn < 0) {
        if (item.name === "Aged Brie") {
          this.incrementQuality(item);
        } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
          item.quality = 0;
        } else {
          this.decrementQuality(item);
        }
      }
    }
    return this.items;
  }

  private incrementQuality(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  private decrementQuality(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
  }

  private updateBackstagePassQuality(item: Item) {
    this.incrementQuality(item);
    if (item.sellIn < 10) {
      this.incrementQuality(item);
    }
    if (item.sellIn < 5) {
      this.incrementQuality(item);
    }
  }
}
