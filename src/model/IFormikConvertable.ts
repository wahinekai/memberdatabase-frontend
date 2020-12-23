/**
 * @file Definition of Formik Convertable Interface
 */

/**
 * A class implementing this interface is ready to be used with formik
 */
interface IFormikConvertable<T> {
    readyForFormik(): T;
}

export default IFormikConvertable;
