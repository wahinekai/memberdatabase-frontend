/**
 * @file Definition of PositionInformation Model
 */

import { Ensure } from '../utils';
import { IValidatable, IFormikConvertable, IPositionInformation, Position } from '.';

/**
 * Definition of Position Information Model
 */
class PositionInformation implements IPositionInformation, IValidatable, IFormikConvertable<IPositionInformation> {
    name?: Position;
    started?: Date;
    ended?: Date;

    /**
     * Validates that the PositionInformation is Valid
     */
    public validate(): void {
        this.name = Ensure.isNotNull(() => this.name);
        this.started = Ensure.isNotNull(() => this.started);
    }

    /**
     * Readies this PositionInformation for use in a Formik Form
     *
     * @returns A version of this object for use in the form
     */
    public readyForFormik(): IPositionInformation {
        // Ensure this is a valid position
        this.validate();

        // No other changes are necessary
        return this;
    }

    /**
     * Creates a PositionInformation for use in a Formik Form
     *
     * @returns An IPositionInformation object ready for use in a formik form
     */
    public static createForFormik(): IPositionInformation {
        const positionInformation = {
            name: Position.Default,
        };

        return positionInformation;
    }
}

export default PositionInformation;
