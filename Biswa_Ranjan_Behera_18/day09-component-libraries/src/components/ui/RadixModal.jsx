import * as Dialog from "@radix-ui/react-dialog";

export default function RadixModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-black text-white px-4 py-2 rounded">
        Open Radix Modal
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-80 shadow-lg">
          <Dialog.Title className="text-lg font-bold">
            Radix UI Modal
          </Dialog.Title>

          <Dialog.Description className="text-gray-600 mt-2">
            Built with Radix + Tailwind
          </Dialog.Description>

          <Dialog.Close className="mt-4 bg-black text-white px-4 py-2 rounded">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
