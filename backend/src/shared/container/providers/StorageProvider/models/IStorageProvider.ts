/* eslint-disable semi */
/* eslint-disable no-unused-vars */
export default interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
