export const getTargetSection = (blocks: ReadonlyArray<HTMLElement>, target: HTMLElement) => {
    const index = blocks.indexOf(target)

    if (index >= blocks.length - 1) {
        return target
    }

    return blocks[index + 1]
}
