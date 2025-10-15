class InvalidData extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidData";
  }
}

export default InvalidData;
