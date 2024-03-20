
export function createSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-') // Boşlukları tireye dönüştür
      .replace(/[^a-z0-9-]/g, '') // Alfasayısal ve tire dışındaki karakterleri kaldır
      .replace(/-+/g, '-') // Birden fazla tireyi tek tireye dönüştür
      .replace(/^-*/, '') // Başındaki tireleri kaldır
      .replace(/-*$/, ''); // Sonundaki tireleri kaldır
  }