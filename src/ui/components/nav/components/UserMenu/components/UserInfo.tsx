import React from "react";

// Define the type inline
type UserDetailsFragment = {
  firstName?: string | null;
  lastName?: string | null;
  email: string;
};

type Props = {
  user: UserDetailsFragment;
};

export const UserInfo = ({ user }: Props) => {
  const userName =
    user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : null;

  return (
    <p className="truncate px-5 py-2 text-xs text-neutral-700">
      {userName && (
        <span className="mb-0.5 block truncate font-bold">{userName}</span>
      )}
      {user.email}
    </p>
  );
};
