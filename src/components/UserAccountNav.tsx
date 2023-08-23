

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from './ui/dropdown-menu'
import React from 'react';
import { Button } from './ui/button'; 
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
 
type Props = {
    user: User;
};

const UserAccountNav = ({ user }: Props) => {
  return ( 
    <DropdownMenu>
        <DropdownMenuTrigger>
              <Button>Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
            <div className='flex items-center justify-start gap-2 p-2'>
                <div className='flex flex-col space-y-1 leading-none'>
                    {user?.name && <p className='font-medium'>{user.name}</p>}
                    {user?.email && (
                        <p className='w-[200px] truncate text-sm text-secondary-foreground'>
                            {user.email}
                        </p>
                    )}
                </div>
            </div>

            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => {
                signOut
            }}
            >
                Sign out
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav