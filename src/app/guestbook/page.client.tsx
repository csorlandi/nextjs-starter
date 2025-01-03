'use client';

import { useActionState } from 'react';

import { InsertGuestbookEntrySchema } from '@/database/schema/guestbook-entries';

import { createGuestbookEntry } from './actions';

import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Button, Textarea } from '@nextui-org/react';

export default function GuestbookClient() {
  const [lastResult, action] = useActionState(createGuestbookEntry, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: InsertGuestbookEntrySchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <form
      noValidate
      action={action}
      className="mt-4 flex flex-col gap-2"
      id={form.id}
      onSubmit={form.onSubmit}
    >
      <Textarea
        key={fields.message.key}
        className="w-full"
        errorMessage={fields.message.errors}
        isInvalid={!fields.message.valid}
        label="Message"
        name={fields.message.name}
        placeholder="Leave a message..."
      />
      <Button type="submit">Create</Button>
    </form>
  );
}
