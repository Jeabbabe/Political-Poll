import { useCounterStore } from "../stores/counter";
export const counter = useCounterStore();

export const PartyData = () => ({
    labels: [
        "พรรคเพื่อไทย",
        "พรรคก้าวไกล",
        "พรรคไทยสร้างไทย",
        "พรรคประชาธิปัตย์",
        "พรรคพลังประชารัฐ",
        "พรรคภูมิใจไทย",
        "พรรครวมไทยสร้างชาติ",
        "งดออกเสียง",
      ],
      datasets: [
        {
          borderWidth: 1,
          borderRadius: 10,
          data: [
            counter.count,
            counter.count2,
            counter.count3,
            counter.count4,
            counter.count5,
            counter.count6,
            counter.count7,
            counter.count8,
          ],
          backgroundColor: [
            "#FF0000",
            "#FF6000",
            "#8000C0",
            "#00C0FF",
            "#E0E0E0",
            "#00FF00",
            "#3000C0",
            "Black",
          ],
          borderColor: "black",
        },
      ],
    })
    
export const options = {
    responsive: true
}