import { ColumnGroup } from "../../entities/columnGroup";
import { Column } from "../../entities/column";
import { ManagedFocusComponent } from "../../widgets/managedFocusComponent";
import { isUserSuppressingHeaderKeyboardEvent } from "../../utils/keyboard";

export abstract class AbstractHeaderWrapper extends ManagedFocusComponent {

    protected abstract readonly column: Column | ColumnGroup;
    protected abstract readonly pinned: string;

    protected abstract onFocusIn(e: FocusEvent): void;

    protected shouldStopEventPropagation(e: KeyboardEvent): boolean {
        const { headerRowIndex, column } = this.focusController.getFocusedHeader()!;

        return isUserSuppressingHeaderKeyboardEvent(
            this.gridOptionsWrapper,
            e,
            headerRowIndex,
            column
        );
    }

    public getColumn(): Column | ColumnGroup {
        return this.column;
    }

    public getPinned(): string {
        return this.pinned;
    }
}