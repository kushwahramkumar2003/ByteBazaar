import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '@/trpc/index'

export const trpc = createTRPCReact<AppRouter>({})
